import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form"; 
import RadioButton from '../components/RadioButton';


export default function Home() {

  let [count, setCount] = useState(20);
  const {register, handleSubmit} = useForm()
  let orang = '#fcb900';
  let blu = '#061d7d';


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form 
      onSubmit={handleSubmit((data)=> console.log(data))}
      className='elementor-form'>
        <div className='progress-bar'>
          <div className='progress'></div>
        </div>
        <div className="inputs">


          { count === 20 ? <div className="input" >
            <h1>Vous vivez dans</h1>
            <RadioButton register={register} stap="fitst" text="une maison" />
            <RadioButton register={register} stap="fitst" text="un appartement" />

          </div> : ''}

          {count === 40 ? <div className="input">
            <h1>Vous êtes</h1>

            <RadioButton register={register} stap="second" text="Propriétaire" />
            <RadioButton register={register} stap="second" text="Locataire" />
          </div> : ''}


          {count === 60 ? <div className="input">
            <h1>Vous êtes</h1>
            <RadioButton register={register} stap="therd" text="Entre 20 et 35 ans" />
            <RadioButton register={register} stap="therd" text="36 et 50 ans" />
            <RadioButton register={register} stap="therd" text="51 et 60 ans" />
            <RadioButton register={register} stap="therd" text="Plus de 60 ans" />
          </div> : ''}
          {count === 80 ? <div className="input">
            <h1>Quelle est votre dépense éléctrique annuelle ?</h1>
            <RadioButton register={register} stap="four" text="0 à 1000€" />
            <RadioButton register={register} stap="four" text="1000€ à 2000€" />
            <RadioButton register={register} stap="four" text="Plus de 2000€" />
            <RadioButton register={register} stap="four" text="Je ne sais pas" />
          </div> : ''}

          {count === 100 ? <div className="input big">
          <input
            {...register('nome')}
            placeholder = 'nome'
            className="inputText"
          />
          <input
            {...register('prenoms')}
            placeholder = 'prenoms'
            className="inputText"
          />
          <input
            {...register('telephone')}
            placeholder = 'telephone'
            className="inputText"
          />
          <input
            {...register('postal')}
            placeholder = 'Code postal'
            className="inputText"
          />
          <input
            {...register('postal')}
            placeholder = 'Code postal'
            className="inputText bigInput"
          />
          </div> : ''}
          
        </div>
        <div className="button">
          {count === 20 ? <button  onClick={()=> {setCount(count + 20)}}>Suivent</button>
          : count === 100 ? <button  onClick={() => {setCount(count)}}>Suivent</button> : <><button  onClick={()=> {setCount(count - 20)}}>Précédent</button>
          <button  onClick={() => {setCount(count + 20)}}>Suivent</button></>
          }
        </div>

      </form>
      <style jsx>
            {`
            .progress-bar{
              width: 100%;
              height: 20px;
              background-color: ${blu};
              border-bottom-left-radius: 22px;
              border-bottom-right-radius: 22px;
              border-top-right-radius: 22px;
              border-top-left-radius: 22px;
              margin-bottom: 10px;
            }
            .progress{
                width: ${count}%;
                height: 20px;
                background-color: ${orang};
                border-bottom-left-radius: 22px;
                border-bottom-right-radius: 22px;
                border-top-right-radius: 22px;
                border-top-left-radius: 22px;
            }
            .button{
              display: flex;
              justify-content: space-between;
              gap: 20px;
            }
            .button button{
              height: 40px;
              width: 100%;
              background: ${orang};
              border-radius: 17px 17px 17px 17px;
              color: #fff;
            }
            .inputs{
              padding: 0 0 15px 0;

            }
            .input{
              display: flex;
              flex-direction: column;
              gap: 10px
              
            }
            input {
              margin: 0 10px 0 0;
              padding: 10px;

            }
            .inputText{
              border: 1px solid;
              border-radius: 3px;
              height: 45px;
              width: 47%;
            }
            .big{
              display: flex;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
            .bigInput{
              width: 100%;
            }
            `}
          </style>
    </main>
  )
}
