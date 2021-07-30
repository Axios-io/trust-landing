export const IFrame = ({ closeModal }) => {
	return (
		<div id='modal-wrapper'>
			<p onClick={closeModal}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-12 w-12'
					viewBox='0 0 20 20'
					fill='red'>
					<path
						fillRule='evenodd'
						d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
						clipRule='evenodd'
					/>
				</svg>
			</p>
			<div className='h_iframe-aparat_embed_frame'>
				<iframe
					src='https://www.aparat.com/video/video/embed/videohash/8kosc/vt/frame?&recom=none'
					title='معرفی افزونه گارانتی وردپرس'
					allowFullScreen={true}
					webkitallowfullscreen='true'
					mozallowfullscreen='true'></iframe>
			</div>
		</div>
	)
}
