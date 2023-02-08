import { publish } from 'gh-pages';

publish(
  'build', // path to public directory
  {
    branch: 'main',
    repo: 'git@github.com:mgaroz/frontend-mentor.git', // Update to point to your repository
    dest: 'rating-component',
    user: {
      name: 'Miguel Garoz', // update to use your name
      email: 'mgaroz@umes.edu.gt' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);