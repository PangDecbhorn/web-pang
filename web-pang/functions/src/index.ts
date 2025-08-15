import { initializeApp } from 'firebase-admin'

initializeApp({
	storageBucket: 'web-pang.appspot.com'
})

export { default as app } from './app'
