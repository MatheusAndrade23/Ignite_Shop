import { styled } from '..';

export const NavContainer = styled('nav', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 100,

  width: '100%',
  height: '100vh',
  maxWidth: 300,
  padding: 25,

  backgroundColor: '$gray800',
  transition: '.5s',

  header: {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button: {
      fontSize: 20,
      lineHeight: 0,
    },
  },

  variants: {
    transform: {
      hidden: {
        transform: 'translateX(110%)',
      },
      show: {
        transform: 'translateX(0%)',
      },
    },
  },
});
