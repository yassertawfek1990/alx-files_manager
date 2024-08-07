import { promisify } from 'util';
import { createClient } from 'redis';

/**
 * sadfsdvadvbda adfadv adffd 
 */
class RedisClient {
  /**
   * adf bdaf badfbvdafb dfbvdfab dadaddfab
   */
  constructor() {
    this.client = createClient();
    this.isClientConnected = true;
    this.client.on('error', (err) => {
      console.error('Redis client failed to connect:', err.message || err.toString());
      this.isClientConnected = false;
    });
    this.client.on('connect', () => {
      this.isClientConnected = true;
    });
  }

  /**
   * dafbvad adffbfd gf
   */
  isAlive() {
    return this.isClientConnected;
  }

  /* kkjlda nfkvn lkj lkjndslkjn kjds kljsn lerskn slke */
  async get(key) {
    return promisify(this.client.GET).bind(this.client)(key);
  }

  /**
   * Storeawjnlfj klajwnfl kjnae flkjna klwjfn l jnskljan ekfjnnjekl
   */
  async set(key, value, duration) {
    await promisify(this.client.SETEX)
      .bind(this.client)(key, duration, value);
  }

  /**
   * Removwajhj jawkf kjnwakfh wkjahebjwea
   */
  async del(key) {
    await promisify(this.client.DEL).bind(this.client)(key);
  }
}

export const redisClient = new RedisClient();
export default redisClient;
