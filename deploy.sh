set -e
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
# git push -f orgin master:gh-pages
git push orgin master
git checkout gh-pages
git rebase master
git push orgin gh-pages
git checkout master
cd -