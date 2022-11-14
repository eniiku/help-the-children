const Button = ({ children }: any) => {
  return (
    <div className='md:block w-100px h-40px relative'>
      <button className='custom-btn relative'>{children}</button>

      <div className='custom-btn-shadow' aria-hidden></div>
    </div>
  );
};

export default Button;
