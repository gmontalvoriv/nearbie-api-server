// OPENSHIFT servers are used for development
module.exports = {
  'production': {
    'port': Number(process.env.PORT || 3000),
    'ip': '127.0.0.1',
    'database': 'mongodb://admin:admin@ds061355.mongolab.com:61355/quickee-db',
    'secret': 'rRID4RK7'
  },
  'development': {
    'port': Number(process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3001),
    'ip': process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    'database': 'mongodb://admin:admin@ds061355.mongolab.com:61355/quickee-db'
  },
  'test': {
    'port': Number(process.env.PORT || 3002),
    'ip': '127.0.0.1',
    'database': 'mongodb://admin:admin@ds011369.mlab.com:11369/quickee-test-db'
  }
};

