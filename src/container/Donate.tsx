import { AiOutlineArrowRight } from 'react-icons/ai';

export const Donate = () => {
  return (
    <section>
      <div>
        <h1>ready to help?</h1>

        <p>
          You have two hands. One to help yourself, the second the help others.
          Share your kindness through donations here
        </p>
      </div>

      <div>
        {['$5', '$15', '$45', '$125'].map((amount) => (
          <button key={amount}>{amount}</button>
        ))}

        <button>
          <form>
            <label htmlFor='custom'>$</label>

            <input type='number' name='custom' placeholder='Custom Amount' />
          </form>
        </button>

        <button type='submit'>
          continue
          <AiOutlineArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};
