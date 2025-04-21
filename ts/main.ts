const showvaru = () => $('#searchtext').fadeToggle(2000);
const hidevaru = () => $('#varu').show(1000);

const validateAndNavigate = (value: string) => {
  const allowedUrls = [
    'index.html',
    'products.html',
    'shopping.html',
    'contact.html',
    'about.html',
    'register.html',
    'login.html',
  ];
  if (allowedUrls.includes(value)) {
    window.location.href = value;
  } else {
    console.error('Invalid navigation attempt:', value);
  }
};
