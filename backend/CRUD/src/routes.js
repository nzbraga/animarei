require('dotenv').config()
const {Router} = require('express')

const UserController = require('./controller/UserController')
const FavoriteController = require('./controller/FavoriteController')
const FriendController = require('./controller/FriendController')

//middlewares
const {checkToken} = require('./tools/checkToken')
const {validUserInput} = require('./tools/validateUserInput')
const {validLoginInput} = require('./tools/validateLoginInput')
const {validFavorite} = require('./tools/validateFavorite')
const {validFriend} = require('./tools/validateFriend')

const jwt = require('jsonwebtoken')

const router = Router()

//users open routes 
router.post('/user-create',validUserInput, UserController.userCreate )
router.post('/login', validLoginInput, UserController.login )

//users auth routes
router.get('/users-list', checkToken, UserController.usersList )
router.delete('/user-delete', checkToken, UserController.userDelete )
router.get('/user-get', checkToken, UserController.userGet )
router.put('/user-update', checkToken, UserController.userUpdate )

//favorite auth routes
router.post('/favorite-create',checkToken,validFavorite, FavoriteController.favoriteCreate )
router.delete('/favorite-delete', checkToken, FavoriteController.favoriteDelete )
router.get('/favorites-list', checkToken, FavoriteController.favoritesList )
router.put('/favorite-update', checkToken, FavoriteController.favoriteUpdate )

//friend auth routes
router.post('/friend-create',checkToken,validFriend, FriendController.friendCreate )
router.delete('/friend-delete', checkToken, FriendController.friendDelete )
router.get('/friends-list', checkToken, FriendController.friendsList )


module.exports = router