//----------------------------------------------------------
var createError = require('http-errors');
var express = require('express'); // 引入express模組
var path = require('path'); // 處理檔案路徑
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var sightPresent = require('./routes/sightPresent');
var setAllSight = require('./routes/setAllSight');

var app = express(); //創建了一個 Express 應用程式的實例
//---------------------------------------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);// 當網頁URI是 localhost:3000/index，去indexRouter出裡
app.use('/sightPresent', sightPresent);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
