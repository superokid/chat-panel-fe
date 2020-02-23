import packageJSON from '../../package.json';

export function checkStorageVersion() {
  console.log('%c version ', 'background: #154575; color: #fff', packageJSON.version);
  try {
    const version = localStorage.getItem('version');
    // first user storage
    if (!version) {
      localStorage.setItem('version', packageJSON.version);
      return;
    }
    // check when user already login with different version clear storage and logout
    if (version !== packageJSON.version) {
      localStorage.clear();
    }
    // whenever different version store new version value
    if (version !== packageJSON.version) {
      localStorage.setItem('version', packageJSON.version);
    }
  } catch (err) {
    console.log(err, 'Error read from storage');
  }
}
