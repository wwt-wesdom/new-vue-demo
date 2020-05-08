import Notification from './notification'

let modelInstance;
function creatModel() {
  modelInstance = modelInstance || Notification.newInstance();
  return modelInstance;
}

function notice(props) {
  let instance = creatModel();
  instance.add(props)
}

export default notice;
