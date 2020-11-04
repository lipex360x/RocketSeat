import app from './app';

const server = app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});

process.on('SIGINT', () => {
  server.close()
  console.log('🔒 API Stopped')
})

