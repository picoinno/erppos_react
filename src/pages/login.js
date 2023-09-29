import Head from "next/head";
import React from "react";
import Input from "@/components/form/input/Input";
import Button from "@/components/form/button/Button";
import Checkbox from "@/components/form/input/Checkbox";
// import Img from "public/images/8.png";
// import BgImage from "public/images/bg10.jpeg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const login = () => {
	let settings = {
		dots: true,
		infinite: true,
		// speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
	};
	const loginInfo = [
		{
			id: 1,
			img: "/images/8.png",
			title: "Device မျိုးစုံနဲ့ အရောင်းစတင် လိုက်ပါ",
		},
		{
			id: 2,
			img: "/images/17.png",
			title: " သင့်လုပ်ငန်းတွက် အသင့်တော်ဆုံး",
		},
		{
			id: 3,
			img: "/images/agency-dark.png",
			title: "Pico SBS ကိုသုံး",
		},
	];
	return (
		<>
			<Head>
				<title>ERPPOS | Login</title>
				<meta name="description" content="ERPPOS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className="h-screen overflow-auto customize__scroll"
				style={{
					// backgroundImage: `url(${BgImage})`,
					// backgroundImage: `url("http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg10-dark.48ad721c.jpeg&w=3840&q=75")`,

					backgroundImage: `url("http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg10.8364d7fd.jpeg&w=3840&q=75")`,
					backgroundSize: "cover",
					backgroundRepeat: `no-repeat`,
				}}
			>
				<div className="flex flex-col lg:flex-row">
					<div className="max-w-[50%] m-auto">
						<Slider {...settings}>
							{loginInfo.map((item, index) => (
								<div key={index} className="flex items-center justify-center">
									<div className="flex flex-col justify-center items-center">
										<div className="flex items-center justify-center">
											<Image
												src={item.img}
												width={2000}
												height={2000}
												alt="image"
												className="block md:mb-20 lg:w-[300px] mb-10 w-[150px]"
												// className="w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom"
											/>
										</div>
										<h1 className="text-xl text-gray-500">{item.title}</h1>
									</div>
								</div>
							))}
						</Slider>
					</div>

					<div className="h-full lg:h-[50rem] w-full sm:w-[90%] lg:w-[40%] mx-auto mt-10 p-5 md:p-10 ">
						<div className="bg-white rounded-lg w-full h-full flex flex-col md:justify-center p-5 md:p-10 ">
							<div className="w-full md:w-[80%] mx-auto flex flex-col items-center justify-center pb-15 lg:pb-20">
								<h1 className="mb-2 text-2xl font-semibold text-center">
									ERP POS
								</h1>
								<p className="mb-5 text-gray-400 text-sm text-center">
									Login to Dashboard
								</p>

								<div className="flex flex-col w-full">
									<div className="mb-8">
										<Input
											placeholder="Username"
											className="bg-white focus:bg-white"
										/>
									</div>
									<div className="mb-6">
										<Input
											placeholder="Password"
											className="bg-white focus:bg-white"
										/>
									</div>
									<div className="mb-8">
										<Checkbox labelText="Remember Me" />
									</div>
									<div>
										<Button className="w-full flex items-center justify-center">
											Login
										</Button>
									</div>
								</div>
							</div>
							<div className="flex items-center justify-center gap-4 mt-10 b-3">
								<p className="text-xs text-[#009ef7]">Terms</p>
								<p className="text-xs text-[#009ef7]">Plans</p>
								<p className="text-xs text-[#009ef7]">Contact Us</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default login;
