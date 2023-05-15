module.exports = {
  apps : [{
    script: 'npm run start',
    watch: '.'
  }],

  deploy : {
    production : {
      key: 'ATRA-server-key.pem',
      user : 'fedora',
      host : '54.236.48.80',
      ref  : 'origin/main',
      repo : '',
      path : '/home/coding/react/mern-atra/',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
