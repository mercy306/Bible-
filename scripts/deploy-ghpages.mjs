import { execSync } from 'child_process'
import fs from 'fs'

process.chdir('dist')
try {
  fs.rmSync('.git', { recursive: true, force: true })
} catch {}

execSync('git init')
execSync('git checkout -b gh-pages')
execSync('git add .')
execSync('git commit -m "Deploy Bible App to GitHub Pages"')
execSync('git remote add origin https://mercy306@github.com/mercy306/Bible-.git')
console.log('Pushing to gh-pages branch...')
execSync('git push -f origin gh-pages')
console.log('SUCCESS: Deployed to gh-pages branch!')
