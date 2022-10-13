import './FormContact.css'

const FormContact = (props) => {
   const {name, mail, phone, mess, submit} = props.txt
   return (
      <form>
         <input type="text" placeholder={name} />
         <input type="email" placeholder={mail} />
         <input type="tel" placeholder={phone} />
         <textarea ols="30" rows="10" placeholder={mess}></textarea>
         <input className='submit' type="submit" value={submit} />
      </form>
   )
}

export default FormContact