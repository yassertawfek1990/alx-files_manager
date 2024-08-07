import mongodb from 'mongodb';
// sdcsd 
import Collection from 'mongodb/lib/collection';
import envLoader from './env_loader';

/* d j dfnkln kldf */
class DBClient {
  /**
   * sdvsd  sdvdsv  hl skjd */
  constructor() {
    envLoader();
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const dbURL = `mongodb://${host}:${port}/${database}`;

    this.client = new mongodb.MongoClient(dbURL, { useUnifiedTopology: true });
    this.client.connect();
  }

  /**
   * Checkjkjnslkdj fljsndkl jnkjdsnkfjd
   */
  isAlive() {
    return this.client.isConnected();
  }

  /**
   * Rjksdjl kjlndsljknv kjs ndflkjn
   */
  async nbUsers() {
    return this.client.db().collection('users').countDocuments();
  }

  /**
   * Rkjnskf kljnsf k skfj bkljsnlkjg sg
   */
  async nbFiles() {
    return this.client.db().collection('files').countDocuments();
  }

  /**
   * fskn ljnslkf kjnlsfnglfg klsjf
   */
  async usersCollection() {
    return this.client.db().collection('users');
  }

  /**
   * Resdv dsfd dsf fdf fgf
   */
  async filesCollection() {
    return this.client.db().collection('files');
  }
}

export const dbClient = new DBClient();
export default dbClient;
