const { adminRegister, adminLogin, testController } = require('../Controllers/Admin/adminController');
const { userRegister, updateUsers, getUserById, getUserByIdDelete, getUsers } = require('../Controllers/User/userController')
const { addPackages, getPackageById, getPackages,  getPackagerByIdDelete } = require('../Controllers/Packages/packageController')
const { requireSignIn, isAdmin } = require('../Middleware/authMiddleware');
const router = require('express').Router()



///admin Routing
router.post('/register', adminRegister);
router.post('/login', adminLogin);
router.get('/test', requireSignIn, isAdmin, testController);


///user Routing
router.post('/userregister', userRegister);
router.put('/updateUser/:id', updateUsers);
router.get('/getUsers', getUsers);
router.get('/getUser/:id', getUserById);
router.delete('/deleteUser/:id', getUserByIdDelete);

////package Routing
router.post('/newPackage', addPackages);
router.get('/getPackages', getPackages);
router.get('/getPackages/:id', getPackageById);
router.delete('/deletePackages/:id', getPackagerByIdDelete);



module.exports = router