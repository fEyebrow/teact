import './style.css'
import ReactDOM from './lib/teact/teact-dom'
import React, { useState, FC, VirtualElement } from './lib/teact/teact'

const app = document.querySelector<HTMLDivElement>('#app')!
const e = React.createElement

const LikeButton: FC = () => {

  const [liked, setLiked] = useState<boolean>(false)

  if (liked) {
    return e('span', {}, 'You liked this.');
  }

  return e(
    'button',
    { onClick: () => setLiked(true) },
    'Like'
  );
}

ReactDOM.render(e(LikeButton, {}) as VirtualElement, app)