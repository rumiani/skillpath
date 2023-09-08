import Head from 'next/head';
import React, { useState } from 'react'
const q = [
    {
        id:1,
        q:'یک سوال در رابطه با سایت منتور میت؟',
        a:'این یک پاسخ کوتاه در جواب سوال بالا می‌باشد. برای اطلاعات بیشتر میتوانید با ما تماس حاصل فرمایید تا در اسرع وقت به شما پاسخ داده شود. با تشکر از شما بابت خواندن پاسخ سوال بالا.'
    },
    {
        id:2,
        q:'یک سوال در رابطه با سایت منتور میت؟',
        a:'این یک پاسخ کوتاه در جواب سوال بالا می‌باشد. برای اطلاعات بیشتر میتوانید با ما تماس حاصل فرمایید تا در اسرع وقت به شما پاسخ داده شود. با تشکر از شما بابت خواندن پاسخ سوال بالا.'
    },
    {
        id:3,
        q:'یک سوال در رابطه با سایت منتور میت؟',
        a:'این یک پاسخ کوتاه در جواب سوال بالا می‌باشد. برای اطلاعات بیشتر میتوانید با ما تماس حاصل فرمایید تا در اسرع وقت به شما پاسخ داده شود. با تشکر از شما بابت خواندن پاسخ سوال بالا.'
    },
    {
        id:4,
        q:'یک سوال در رابطه با سایت منتور میت؟',
        a:'این یک پاسخ کوتاه در جواب سوال بالا می‌باشد. برای اطلاعات بیشتر میتوانید با ما تماس حاصل فرمایید تا در اسرع وقت به شما پاسخ داده شود. با تشکر از شما بابت خواندن پاسخ سوال بالا.'
    },
    {
        id:5,
        q:'یک سوال در رابطه با سایت منتور میت؟',
        a:'این یک پاسخ کوتاه در جواب سوال بالا می‌باشد. برای اطلاعات بیشتر میتوانید با ما تماس حاصل فرمایید تا در اسرع وقت به شما پاسخ داده شود. با تشکر از شما بابت خواندن پاسخ سوال بالا.'
    },
]
const Index = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const opendAnswerHandler = (id:number) => {
        setOpenId(id === openId ? null : id);
      };
  return (
    <>
        <Head>
            <link rel="icon" href="/assets/favicon.ico" /> 
            <title>Skillpath</title>
            <meta name="author" content="Maziar Rumiani" />
            <meta name="keywords" content="skill, skillpath" />
            <meta name="description" content="Write about your skill path here ..." />
        </Head>
        <div className="max-w-md mx-auto m-4 p-4" dir='rtl'>
                <h2 className="text-2xl font-semibold mb-4">سوالات متداول:</h2>
            {q.map( (item, index) =>{
                return (
                    <div key={item.id} className=" border-b border-gray-300 py-2">
                        <button onClick={() => opendAnswerHandler(item.id)} 
                        
                        className="flex items-center justify-between w-full">
                            <span className="text-lg font-medium">- {item.q}</span>
                            <span className="text-gray-500 text-xl">{openId === item.id ?  '-':'+'}</span>
                        </button>
                        {openId === item.id &&
                            <div className="mt-2 transition-all duration-300">
                                <p className="text-gray-600" >{item.a}</p>
                            </div>
                        }
                    </div>
                )
            })}

        </div>
    </>
  )
}

export default Index