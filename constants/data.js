export const sidebarData = [
	{
		menu_name: "Home",
		menu_icon: "fa-solid fa-house",
		child_menus: [
			{
				menu_name: "Dashboard",
				link: "/",
			},
			{
				menu_name: "Button",
				link: "/button",
			},
			{
				menu_name: "Card",
				link: "/card",
			},
			{
				menu_name: "POS Card",
				link: "/pos_card",
			},
			{
				menu_name: "Input",
				link: "/input",
			},
			{
				menu_name: "Combobox",
				link: "/combobox",
			},
			{
				menu_name: "DateInput",
				link: "/date_input",
			},
			{
				menu_name: "FilterSelect",
				link: "/filter_select",
			},
			{
				menu_name: "RadioBox",
				link: "/radiobox",
			},
			{
				menu_name: "Select",
				link: "/select",
			},
			{
				menu_name: "Drawer",
				link: "/drawer",
			},
			{
				menu_name: "Textarea",
				link: "/textarea",
			},
			{
				menu_name: "SwitchToggle",
				link: "/switch_toggle",
			},
			{
				menu_name: "Modal",
				link: "/modal",
			},
			{
				menu_name: "Table",
				link: "/table",
			},
			{
				menu_name: "Module",
				link: "/module",
			},
			{
				menu_name: "Business Create",
				link: "/business_create",
			},
			{
				menu_name: "Sidebar",
				link: "/sidebar",
			},
		],
	},
	{
		menu_name: "Users",
		menu_icon: "fa-solid fa-users",
		child_menus: [
			{
				menu_name: "Users",
				menu_icon: "fa-solid fa-user",
				child_menus: [
					{
						menu_name: "Users List",
					},
					{
						menu_name: "Create User",
					},
				],
			},
			{
				menu_name: "Roles",
				menu_icon: "fa-solid fa-chart-column",
				child_menus: [
					{
						menu_name: "Roles List",
					},
					{
						menu_name: "Button",
						link: "/users/roles/button",
					},
					{
						menu_name: "Add Role",
					},
				],
			},
		],
	},
	{
		menu_name: "Contacts",
		menu_icon: "fa-solid fa-address-book",
		child_menus: [
			{
				menu_name: "Suppliers",
				menu_icon: "fa-solid fa-chart-column",
				child_menus: [
					{
						menu_name: "Suppliers List",
					},
					{
						menu_name: "Add Supplier",
					},
				],
			},
			{
				menu_name: "Customers",
				menu_icon: "fa-solid fa-chart-column",
				child_menus: [
					{
						menu_name: "Customers List",
					},
					{
						menu_name: "Add Customer",
					},
				],
			},
			{
				menu_name: "Customer Groups",
				menu_icon: "fa-solid fa-chart-column",
				child_menus: [
					{
						menu_name: "Customers Group List",
					},
				],
			},
			{
				menu_name: "Import Contacts",
				menu_icon: "fa-solid fa-chart-column",
			},
		],
	},
];

export const CustomerGroupList = [];

export const CreateBusinessDetails = [
	{
		id: 1,
		header: "Business Details",
		text: "Name your Business",
	},
	{
		id: 2,
		header: "Business Settings",
		text: "Configure your business setting",
	},
	{
		id: 3,
		header: "Business Owner",
		text: "Create Owner for business",
	},
];

export const OrdersData = [
	{
		order_id: "12345",
		customer: {
			name: "Olivia Wild",
			img: "https://images.unsplash.com/photo-1682547094948-1d764fc412ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		},
		status: "Pending",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Max Smith",
			img: "",
		},
		status: "Completed",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Dan Wilson",
			img: "",
		},
		status: "Delivering",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Robert Doe",
			img: "",
		},
		status: "Processing",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Emma Smith",
			img: "https://preview.keenthemes.com/metronic8/demo39/assets/media/avatars/300-6.jpg",
		},
		status: "Denied",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Olivia Wild",
			img: "",
		},
		status: "Pending",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Olivia Wild",
			img: "",
		},
		status: "Expired",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Olivia Wild",
			img: "",
		},
		status: "Pending",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Olivia Wild",
			img: "",
		},
		status: "Pending",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
	{
		order_id: "12345",
		customer: {
			name: "Olivia Wild",
			img: "",
		},
		status: "Processing",
		total: "$439.00",
		date_added: "06/09/2023",
		date_modified: "13/09/2023",
	},
];

export const UsersListInfos = [
	{
		user: {
			name: "Emma Smith",
			email: "smith@kpmg.com",
			img: "/images/user_image.jpg",
		},
		role: "Administrator",
		last_login: "yesterday",
		status: "",
		joined_date: "10 Nov 2023, 6:43am",
	},
	{
		user: {
			name: "Melody Macy",
			email: "melody@altbox.com",
			img: "",
		},
		role: "Analyst",
		last_login: "20 mins ago",
		status: "Enabled",
		joined_date: "21 Feb 2023, 11:05",
	},
	{
		user: {
			name: "Max Smith",
			email: "melody@altbox.com",
			img: "/images/user_image.jpg",
		},
		role: "Developer",
		last_login: "20 mins ago",
		status: "",
		joined_date: "21 Feb 2023, 11:05",
	},
	{
		user: {
			name: "Emma Smith",
			email: "smith@kpmg.com",
			img: "/images/user_image.jpg",
		},
		role: "Administrator",
		last_login: "yesterday",
		status: "",
		joined_date: "10 Nov 2023, 6:43am",
	},
	{
		user: {
			name: "Melody Macy",
			email: "melody@altbox.com",
			img: "",
		},
		role: "Analyst",
		last_login: "20 mins ago",
		status: "Enabled",
		joined_date: "21 Feb 2023, 11:05",
	},
	{
		user: {
			name: "Max Smith",
			email: "melody@altbox.com",
			img: "/images/user_image.jpg",
		},
		role: "Developer",
		last_login: "20 mins ago",
		status: "",
		joined_date: "21 Feb 2023, 11:05",
	},
	{
		user: {
			name: "Emma Smith",
			email: "smith@kpmg.com",
			img: "/images/user_image.jpg",
		},
		role: "Administrator",
		last_login: "yesterday",
		status: "",
		joined_date: "10 Nov 2023, 6:43am",
	},
	{
		user: {
			name: "Melody Macy",
			email: "melody@altbox.com",
			img: "",
		},
		role: "Analyst",
		last_login: "20 mins ago",
		status: "Enabled",
		joined_date: "21 Feb 2023, 11:05",
	},
	{
		user: {
			name: "Max Smith",
			email: "melody@altbox.com",
			img: "/images/user_image.jpg",
		},
		role: "Developer",
		last_login: "20 mins ago",
		status: "",
		joined_date: "21 Feb 2023, 11:05",
	},
];
export const RolesListInfos = [
	{
		name: "Administrator",
	},
	{
		name: "Cashier",
	},
	{
		name: "Store Keeper",
	},
];

export const SuppliersInfos = [
	{
		contact_id: "K0001",
		business_name: "ကြယ်နီ အုတ်ရောင်း၀ယ်ရေး",
		supplier_name: "U Kyaw Htwe",
		mobile: "0941008973",
		email: "",
		address: "ဈေးပိုင်းရပ်၊ တောင်ကြီး။, Myanmar",
		payable_amount: "",
		receivable_amount: "",
		custom_field_1: "",
		custom_field_2: "",
		custom_field_3: "",
		custom_field_4: "",
	},
	{
		contact_id: "S0001",
		business_name: "စိန်ကျေးတော အုတ်ရောင်း၀ယ်ရေး",
		supplier_name: "Daw Sein Ma Ma",
		mobile: "081-205446",
		email: "",
		address: "ချမ်းမြသာစည်ရပ်၊ တောင်ကြီး။",
		payable_amount: "",
		receivable_amount: "",
		custom_field_1: "",
		custom_field_2: "",
		custom_field_3: "",
		custom_field_4: "",
	},
	{
		contact_id: "T0002",
		business_name: "ကျောက်စိမ်း အုတ်ရောင်း၀ယ်ရေး",
		supplier_name: "U Tin Win Sein",
		mobile: "095211378",
		email: "",
		address: "အေးသာယာမြို့သစ်၊ တောင်ကြီး။",
		payable_amount: "",
		receivable_amount: "",
		custom_field_1: "",
		custom_field_2: "",
		custom_field_3: "",
		custom_field_4: "",
	},
	{
		contact_id: "K0001",
		business_name: "ကြယ်နီ အုတ်ရောင်း၀◌ယ်ရေ",
		supplier_name: "U Kyaw Htwe",
		mobile: "0941008973",
		email: "",
		address: "ဈေးပိုင်းရပ်၊ တောင်ကြီး။, Myanmar",
		payable_amount: "",
		receivable_amount: "",
		custom_field_1: "",
		custom_field_2: "",
		custom_field_3: "",
		custom_field_4: "",
	},
];
export const ProductsList = [
	{
		product: {
			name: "Product 1",
			img: "http://localhost:3000/static/media/3.071d2d900d7efd7b0819.jpg",
		},
		sku: "02474004",
		qty: "6",
		price: "78.00",
		rating: "4",
		status: "published",
	},
	{
		product: {
			name: "Product 2",
			img: "http://localhost:3000/static/media/3.071d2d900d7efd7b0819.jpg",
		},
		sku: "02474008",
		qty: "28",
		price: "78.00",
		rating: "4",
		status: "Inactive",
	},
	{
		product: {
			name: "Product 3",
			img: "http://localhost:3000/static/media/3.071d2d900d7efd7b0819.jpg",
		},
		sku: "02474005",
		qty: "35",
		price: "33.00",
		rating: "4",
		status: "Scheduled",
	},
];

export const infosData = [
	{
		id: "1",
		name: "mg mg",
		email: "mg@gmail.com",
		company: "Mg Company",
		payment_method: "****767822",
		created_date: "14 Dec 2020",
	},
	{
		id: "2",
		name: "aye aye",
		email: "aye@gmail.com",
		company: "Aye Company",
		payment_method: "****938483",
		created_date: "12 Nov 2020",
	},
	{
		id: "3",
		name: "aung aung",
		email: "aung@gmail.com",
		company: "",
		payment_method: "****33423",
		created_date: "21 Oct 2020",
	},
	{
		id: "4",
		name: "kyaw kyaw",
		email: "kyaw@gmail.com",
		company: "Kyaw Company",
		payment_method: "****239923",
		created_date: "19 Oct 2020",
	},
	{
		id: "5",
		name: "ni ni",
		email: "ni@gmail.com",
		company: "",
		payment_method: "****20948",
		created_date: "23 Sep 2020",
	},
	{
		id: "6",
		name: "mg mg",
		email: "mg@gmail.com",
		company: "Mg Company",
		payment_method: "****767822",
		created_date: "14 Dec 2020",
	},
	{
		id: "7",
		name: "aye aye",
		email: "aye@gmail.com",
		company: "Aye Company",
		payment_method: "****938483",
		created_date: "12 Nov 2020",
	},
	{
		id: "8",
		name: "aung aung",
		email: "aung@gmail.com",
		company: "",
		payment_method: "****33423",
		created_date: "21 Oct 2020",
	},
	{
		id: "9",
		name: "kyaw kyaw",
		email: "kyaw@gmail.com",
		company: "Kyaw Company",
		payment_method: "****239923",
		created_date: "19 Oct 2020",
	},
	{
		id: "10",
		name: "ni ni",
		email: "ni@gmail.com",
		company: "",
		payment_method: "****20948",
		created_date: "23 Sep 2020",
	},
	{
		id: "11",
		name: "mg mg",
		email: "mg@gmail.com",
		company: "Mg Company",
		payment_method: "****767822",
		created_date: "14 Dec 2020",
	},
	{
		id: "12",
		name: "aye aye",
		email: "aye@gmail.com",
		company: "Aye Company",
		payment_method: "****938483",
		created_date: "12 Nov 2020",
	},
	{
		id: "13",
		name: "aung aung",
		email: "aung@gmail.com",
		company: "",
		payment_method: "****33423",
		created_date: "21 Oct 2020",
	},
	{
		id: "14",
		name: "kyaw kyaw",
		email: "kyaw@gmail.com",
		company: "Kyaw Company",
		payment_method: "****239923",
		created_date: "19 Oct 2020",
	},
	{
		id: "15",
		name: "ni ni",
		email: "ni@gmail.com",
		company: "",
		payment_method: "****20948",
		created_date: "23 Sep 2020",
	},
	{
		id: "16",
		name: "mg mg",
		email: "mg@gmail.com",
		company: "Mg Company",
		payment_method: "****767822",
		created_date: "14 Dec 2020",
	},
	{
		id: "17",
		name: "aye aye",
		email: "aye@gmail.com",
		company: "Aye Company",
		payment_method: "****938483",
		created_date: "12 Nov 2020",
	},
	{
		id: "18",
		name: "aung aung",
		email: "aung@gmail.com",
		company: "",
		payment_method: "****33423",
		created_date: "21 Oct 2020",
	},
	{
		id: "19",
		name: "kyaw kyaw",
		email: "kyaw@gmail.com",
		company: "Kyaw Company",
		payment_method: "****239923",
		created_date: "19 Oct 2020",
	},
	{
		id: "20",
		name: "ni ni",
		email: "ni@gmail.com",
		company: "",
		payment_method: "****20948",
		created_date: "23 Sep 2020",
	},
];
