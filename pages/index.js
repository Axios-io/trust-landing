import Head from 'next/head'
import { IFrame } from './iframe'
import { useState } from 'react'

export default function Home() {
	const [modalStat, setModalStat] = useState(false)
	const openModal = () => {
		setModalStat(true)
		document.querySelector('main').style = 'filter: blur(4px) grayscale(0.8)'
	}
	const closeModal = () => {
		setModalStat(false)
		document.querySelector('main').style = 'filter: none'
	}
	const makeLink = () => {
		const a = document.createElement('a')
		a.href = '#section-1'
		a.click()
	}
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<Head>
				<title>افزونه استعلام گارانتی و اعتبارسنجی وردپرس Trust</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='stylesheet' href='css/fonts.css' />
			</Head>

			{modalStat && <IFrame closeModal={closeModal} />}

			<main>
				<div className='hero'>
					<h1 className='text-6xl text-gray-700 font-bold'>
						افزونه استعلام گارانتی و اعتبارسنجی وردپرس{' '}
						<a className='text-blue-600' href='#'>
							Trust
						</a>
					</h1>

					<div
						className='mt-6 text-2xl flex flex-col-reverse gap-8 md:grid md:grid-cols-2 items-center'
						id='intro'>
						<div className='w-1/3 mx-auto justify-center flex flex-col gap-4 md:flex-row md:w-full'>
							<button className='primary'>خرید از ژاکت</button>
							<button className='secondary' onClick={makeLink}>
								بیشتر بدانید!
							</button>
						</div>
						<div className='relative w-max mx-auto'>
							<img
								src='/thumb.png'
								alt=''
								className='md:-translate-x-4 md:translate-y-4 rounded-lg blur-sm grayscale hover:blur-none hover:grayscale-0 transition duration-300'
							/>

							<svg
								onClick={openModal}
								xmlns='http://www.w3.org/2000/svg'
								className='player-btn'
								viewBox='0 0 20 20'
								fill='#059669'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
									clipRule='evenodd'
								/>
							</svg>
						</div>
					</div>
				</div>

				<div
					id='brands'
					className='w-5/6 shadow-lg border border-blue-200 rounded py-3 mx-auto mt-10 flex justify-evenly'>
					<img src='/axios.svg' alt='توسط تیم آکسیوس' width='86' />
					<img src='/made-in-iran.png' alt='تولید ایرانی' />
					<img src='/zhaket.svg' alt='تنها در ژاکت' />
				</div>

				<div className='section' id='section-1'>
					<div>
						<h1>طراحی قدرتمند و پیشرفته</h1>
						<p>
							افزونه{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								Trust
							</code>{' '}
							از فرم های طراحی شده با کتابخانه{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								React
							</code>{' '}
							بهره میبرند. این کتابخانه جاوا اسکریپتی ابزاری توسعه یافته برای
							توسعه رابط های کاربری قدرنمند توسط{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								Facebook
							</code>{' '}
							است.
						</p>
						<p>
							بهره گیری از{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								React
							</code>{' '}
							در طراحی فرم های این افزونه باعث میگردد از تداخل نسخه های jQuery
							مورد استفاده در دیگر افزونه ها و پوسته سایت شما جلوگیری شود و نیز
							با سرعتی باورنکردنی عملیات کاربر را انجام دهد!
						</p>
						<p>
							قابلیت هایی که{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								React
							</code>{' '}
							به این افزونه بخشیده:
						</p>
						<ul>
							<li>سرعت کارکرد بالا بدون نیاز به ریلود صفحه</li>
							<li>کاهش بار بر روی هاست شما با عدم نیاز به ریلود</li>
							<li>ثبت یک کد و مشاهده نتیجه در همان لحظه بدون نیاز به ریلود</li>
							<li>قابلیت گسترش و توسعه آسان</li>
							<li>جاوا اسکریپت بهینه و مدرن</li>
						</ul>
						<br />
						<p>
							این قابلیت افزونه که بدون نیاز به ریلود صفحه میتواند هربار اطلاعات
							جدیدی را بررسی و نشان دهد از ایجاد درخواست های اضافی برای دریافت
							تصاویر و HTML جلوگیری میکند و بدین ترتیب فشار کمتری بر روی هاست
							شما وارد شده و کاربر نیز تجربه سریع تری از سایت شما خواهد داشت.
						</p>
					</div>
					<div className='bg-gray-100 w-36 h-36 rounded-md -rotate-6 shadow-md centerize mx-auto'>
						<div className='rotate-6 rounded-md bg-gradient-to-br from-green-100 to-blue-300 w-11/12 h-5/6 centerize'>
							<img src='/react.png' alt='React.js' className='w-full' />
						</div>
					</div>
				</div>
				<div className='section' id='section-2'>
					<div>
						<h1>ظاهر ساده اما چشم نواز</h1>
						<p>
							طراحی فرم های افزونه با استفاده از فریمورک{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								TailwindCSS
							</code>{' '}
							صورت گرفته است که از رقبای جدید و سرسخت بوتسترپ به شمار میرود.
						</p>
						<p>
							تیلویند بسیار بنیادی بوده و به کاربران خود اجازه میدهد تا صفحات و
							کامپوننت های طراحی شده توسط آن را در هر زمان به طور کلی شخصی سازی
							و متحول کرد.
						</p>
						<p>
							با توجه به استفاده از تیلویند این امکان وجود دارد تا استایل فرم
							های افزونه به راحتی مطابق میل شما شخصی سازی گردد. بدون هیچ محدودیت
							در سلیقه و طراحی!
						</p>
						<p>
							علاوه بر این مزایا{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								Tailwind
							</code>{' '}
							با بهره گیری از ابزار{' '}
							<code className='px-2 py-1 rounded-md text-gray-600 font-mono bg-gray-100'>
								Tailwind-cli
							</code>
							تنها استایل های css استفاده شده را در فایل نهایی میگنجاند و
							بنابراین شما کوچکترین فایل css ممکن را در اختیار خواهید داشت.
						</p>
					</div>
					<div className='bg-gray-100 w-36 h-36 rounded-md -rotate-6 shadow-md centerize mx-auto'>
						<div className='rotate-6 rounded-md bg-gradient-to-br from-green-100 to-blue-300 w-11/12 h-5/6 centerize'>
							<img src='/tailwind-css.png' alt='React.js' />
						</div>
					</div>
				</div>

				<div className='section' id='screenshots'>
					<img src='/wp-warranty-check-1.png' alt='' />
					<img src='/wp-warranty-check-2.png' alt='' />
					<img src='/wp-warranty-check-3.png' alt='' />
					<img src='/wp-warranty-check-4.png' alt='' />
				</div>

				<button className='bg-blue-500 hover:bg-indigo-700 transition duration-100 text-white md:w-1/2 mx-auto py-8 cursor-pointer my-12'>
					خرید افزونه استعلام گارانتی وردپرس Trust
				</button>
				<img
					src='/support.png'
					alt='مزایای خرید محصولات Axios'
					className='w-full md:w-10/12 mx-auto'
				/>
			</main>

			<footer className='flex items-center justify-center w-full h-24 border-t'>
				<a
					className='flex items-center justify-center text-gray-600'
					href='https://github.com/mjtbkh'
					target='_blank'
					rel='noopener noreferrer'>
					توسعه یافته با{' '}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 animate-pulse'
						viewBox='0 0 20 20'
						fill='#EF4444'>
						<path
							fillRule='evenodd'
							d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
							clipRule='evenodd'
						/>
					</svg>{' '}
					توسط مجتبی
				</a>
			</footer>
		</div>
	)
}
