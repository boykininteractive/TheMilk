# #!/bin/bash
# chmod +x ./build.sh

npm  install &&
npm run build &&
pm2 restart boykin.website.boykin.dev