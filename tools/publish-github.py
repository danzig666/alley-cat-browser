"""Create a new public GitHub repository and enable its playable Pages site.

Requires authenticated GitHub CLI access and an existing local main commit.
Run from any directory: python3 tools/publish-github.py [repository-name]
"""
from pathlib import Path
import json
import subprocess
import sys

ROOT = Path(__file__).resolve().parent.parent
name = sys.argv[1] if len(sys.argv) > 1 else 'alley-cat-browser'
if not name or any(c not in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._' for c in name):
    raise SystemExit('Use a simple GitHub repository name.')


def run(*args, input=None):
    result = subprocess.run(args, cwd=ROOT, input=input, text=True, capture_output=True)
    if result.returncode:
        raise SystemExit(result.stderr.strip() or result.stdout.strip() or 'Command failed.')
    return result.stdout.strip()


owner = run('gh', 'api', 'user', '--jq', '.login')
repo = f'{owner}/{name}'
run('git', 'rev-parse', '--verify', 'main^{commit}')
if run('git', 'status', '--porcelain'):
    raise SystemExit('Commit local changes before publishing.')

remote = subprocess.run(['git', 'remote', 'get-url', 'origin'], cwd=ROOT, text=True, capture_output=True)
if remote.returncode == 0:
    if remote.stdout.strip() not in (f'https://github.com/{repo}', f'https://github.com/{repo}.git'):
        raise SystemExit('The existing origin points to a different repository.')
    visibility = run('gh', 'repo', 'view', repo, '--json', 'isPrivate', '--jq', '.isPrivate')
    if visibility != 'false':
        raise SystemExit('The existing repository is not public.')
    run('git', 'push', '-u', 'origin', 'main')
else:
    print(run('gh', 'repo', 'create', repo, '--public', '--source', str(ROOT), '--remote', 'origin',
              '--push', '--description', 'Alley Cat in native JavaScript, with live CGA/pixel art and PC speaker/AdLib-style audio switches.'))

endpoint = f'repos/{repo}/pages'
pages = subprocess.run(['gh', 'api', endpoint], cwd=ROOT, text=True, capture_output=True)
if pages.returncode == 0:
    run('gh', 'api', endpoint, '--method', 'PUT', '--input', '-',
        input=json.dumps({'build_type': 'legacy', 'source': {'branch': 'main', 'path': '/'}}))
elif '404' in pages.stderr:
    run('gh', 'api', endpoint, '--method', 'POST', '--input', '-',
        input=json.dumps({'build_type': 'legacy', 'source': {'branch': 'main', 'path': '/'}}))
else:
    raise SystemExit(pages.stderr.strip())

site = run('gh', 'api', endpoint, '--jq', '.html_url')
run('gh', 'repo', 'edit', repo, '--homepage', site)
print(f'Repository: https://github.com/{repo}')
print(f'Pages: {site}')
print('The first Pages deployment can take a few minutes.')
