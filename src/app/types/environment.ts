import { FirebaseOptions } from '@angular/fire/app';
import { CryptionKeys, DatabaseType, VerboseType } from 'kleinsendelbach-website-library';

export type Environment = {
    firebase: FirebaseOptions;
    databaseType: DatabaseType;
    testUser: {
        email: string;
        password: string;
    } | null;
    verbose: VerboseType;
    cryptionKeys: CryptionKeys;
    callSecretKey: string;
    production: boolean;
    name: string;
}
