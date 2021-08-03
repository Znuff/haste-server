{

  "host": "127.0.0.1",
  "port": 7777,

  "keyLength": 6,

  "maxLength": 2048000,

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
    "expire": 31536000
  },

  "documents": {
    "about": "./about.md"
  }

}
