set -e
# 生成静态文件
npm run docs:build
# 进入生成的文件夹
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:HAOFUYANG/HAOFUYANG.github.io.git master

git push -f git@github.com:HAOFUYANG/yang-blog.git main:gh-pages
# 如果使用 travis 持续集成
# git push -f  git@github.com:HAOFUYANG/HAOFUYANG.git master:gh-pages

cd -