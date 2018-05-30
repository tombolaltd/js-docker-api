const cp = require('child_process');
// docker-compose --file ./tests/assets/integration/docker-compose.yml exec foo ls -la
let child = cp.spawn('docker-compose', ['--file', './tests/assets/integration/docker-compose.yml', 'run', 'foo', 'ls', '-la'], {
    
});
// let child = cp.spawn('ls', ['-la']);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
child.stderr.on('data', (data) => {
console.log(`stderr: ${data}`);
});
  

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});