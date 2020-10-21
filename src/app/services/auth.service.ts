import { Injectable } from '@angular/core';
//Direct users after logout
import { Router } from '@angular/router';

//interact with firebase auth and firestore
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

//from rxjs for user control flow
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';


@Injectable({providedIn: 'root'})
export class AuthService {
  user$: Observable<User>;

//inject dependencies into constructor
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router

  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>('users/${user.uid}').valueChanges();
        } else {
          return of(null);
        }
      })
    )
  }
async googleSignin(){
  const provider = new auth.GoogleAuthProvider();
  const credential = await this.afAuth.signInWithPopup(provider);
  return this.updateUserData(credential.user);

}

async signOut(){
  await this.afAuth.signOut();
  return this.router.navigate(['/']);
}

private updateUserData(user){
  // sets user data to firestore on login
  const userRef: AngularFirestoreDocument<User> = this.afs.doc('users/${user.uid}');

  const data = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,



  };
  return userRef.set(data, { merge: true });
}

}

