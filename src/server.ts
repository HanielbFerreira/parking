import App from './app';

const port = 4000;

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', ()=> process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', ()=> process.exit(0)));

App.app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})