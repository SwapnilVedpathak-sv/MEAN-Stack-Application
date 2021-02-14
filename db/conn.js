const mongoose = require ("mongoose");

mongoose.connect('mongodb+srv://swapnilvedpathak:Swapnil9884@cluster0.ehcr9.mongodb.net/student?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Connection is Successful");
}).catch((e) => {
    console.log("No Connection");
})