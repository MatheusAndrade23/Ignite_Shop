import { styled } from '..';

export const NavContainer = styled('nav', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 100,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  height: '100vh',
  maxWidth: 400,
  padding: 25,

  backgroundColor: '$gray800',
  transition: '.5s',

  header: {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button: {
      lineHeight: 0,
      cursor: 'pointer',
      backgroundColor: '$gray800',
      color: '$white',
      border: 0,
      borderRadius: '50%',

      svg: {
        fontSize: 20,
      },
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

  '> button': {
    fontSize: 16,
    marginTop: 30,
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.1rem',
    cursor: 'pointer',
    width: '100%',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      transition: '0.5s',
      backgroundColor: '$green300',
    },
  },
});

export const ProductsContainer = styled('div', {
  width: '100%',
  marginTop: 20,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 30,
});

export const InfoContainer = styled('div', {
  marginTop: 'auto',
  width: '100%',
  height: 50,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export const ProductContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  height: 93,

  '& div:last-child': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    height: '100%',

    h4: {
      fontWeight: 'normal',
      fontSize: '$md',
    },

    button: {
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      color: '$green300',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  height: '100%',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
});
