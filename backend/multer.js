const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, res, cb) {
        const uniqueSuffix = Data.now() + "-" + Math.round.apply(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");
    },
});

exports.upload=multer({storage:storage})