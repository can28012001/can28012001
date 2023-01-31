const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const path = require('path')
const http = require("http");
const {create} = require('express-handlebars')
const socketio = require('socket.io')

const route = require('./routes/index')

// Lấy phương thức create từ thư viện express-handlebars để gán cho hbs
const hbs = create({
   extname: '.hbs',
});

const app = express()
const port = 3000
const server = http.createServer(app);
const io = socketio(server)

// Đường dẫn của file tĩnh (cụ thể là img)
app.use(express.static(path.join(__dirname,'public/')))

//HTTP logger
app.use(morgan('common'))

// Handlebars
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources/views'))
// console.log(path.join(__dirname,'resources\\views'))


io.on('connection',function(socket) {
  
})

// Định nghĩa tuyến đường Route để truy cập trang web
route(app)



server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})