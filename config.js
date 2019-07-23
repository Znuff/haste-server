{

  "host": "127.0.0.1",
  "port": 7777,

  "keyLength": 6,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "random"
  },

  "rateLimits": {
    "whitelist": ['127.0.0.1'],
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
	  "type": "redis",
	  "host": "localhost",
	  "port": 6379,
	  "db": 2,
    "expire": 604800
  },

  "documents": {
    "about": "./about.md"
  }

}
