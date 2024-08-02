import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import dsvg from '../../assets/Mediamodifier-Designs.png'
import BarChart from './barchart';
import RecentOrders from './orders';
import cprofile from '../../assets/clientprofile.jpg'

export default function Dashboard() {
    return (
        <div className='maindashboard'>
            <h1 className='px-4'>Dashboard</h1>
            <div className='dashboard'>
                <div className='mdb1'>
                    <div className='totalcards'>
                        <div className='tcards'>
                            <div className='svgdiv svgdiv1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" className="bi bi-basket2-fill" viewBox="0 0 16 16">
                                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="blue" className="bi bi-plus-circle-fill svgplus" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" fill="blue" />
                                    <path fill="white" d="M8 4.5a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                            <h6>Total Orders</h6>
                            <div className='tcamount'>
                                <h3>75</h3>
                                <p className='uparrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>3%
                                </p>
                            </div>
                        </div>
                        <div className='tcards'>
                            <div className='svgdiv svgdiv2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="green" className="bi bi-check-circle-fill svgplus" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" fill="green" />
                                    <path fill="white" d="M12.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </div>
                            <h6>Total Delivered</h6>
                            <div className='tcamount'>
                                <h3>70</h3>
                                <p className='downarrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>3%
                                </p>
                            </div>
                        </div>
                        <div className='tcards'>
                            <div className='svgdiv svgdiv3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-handbag-fill" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-x-circle-fill svgplus" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" fill="red" />
                                    <path fill="white" d="M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                                </svg>
                            </div>
                            <h6>Total Cancelled</h6>
                            <div className='tcamount'>
                                <h3>05</h3>
                                <p className='uparrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg>3%
                                </p>
                            </div>
                        </div>
                        <div className='tcards'>
                            <div className='svgdiv svgdiv4'>
                                <Image src={dsvg} width={25} height={25} alt='dollarsvg'></Image>
                            </div>
                            <h6>Total Revenue</h6>
                            <div className='tcamount'>
                                <h3>$12k</h3>
                                <p className='downarrow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="red" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>3%
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='barchart'>
                        <div className="dropdown bardd">
                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Weekly
                            </a>
                        </div>
                        <BarChart />
                    </div>
                    <div className='ordertable'>
                        <h3>Recent Orders</h3>
                        <RecentOrders />
                    </div>
                </div>
                <div className='mdb2'>
                    <div className="netprofit">
                        <div className='profit-net'>
                            <h6>Total Revenue</h6>
                            <h1>$ 6759.25</h1>
                            <p className='uparrow'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="green" className="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                </svg>3%
                            </p>
                        </div>
                        <div className='pbar'>
                            <div className='skill'>
                                <div className='outer'>
                                    <div className='inner'>
                                        <div className='number'>
                                            <h5>70%</h5>
                                            <p>Goal <br />Completed</p>
                                        </div>
                                    </div>
                                </div>
                                <p className='imptext'>*The value here is rounded off.</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" id="pbarsvg">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#00f" />
                                        <stop offset="100%" stop-color="#00f" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="50" stroke-linecap="round" id='pbarcircle' />
                            </svg>
                        </div>
                    </div>
                    <div className='goaldropdown'>
                        <div className='goals'>
                            <div className='goal'>
                                <div className='goalsvg'>
                                    <svg fill="red" width="50px" height="50px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title /><path d="M321.85,250.69c-4-33.61-30.39-61-65.85-61-36,0-66.34,30.31-66.34,66.34S220,322.34,256,322.34c35.47,0,61.84-27.41,65.85-61a18.39,18.39,0,0,0,.49-5.32A18.71,18.71,0,0,0,321.85,250.69ZM225.12,256c0-39.95,59.88-39.6,61.76,0C285,295.55,225.12,296,225.12,256Z" /><path d="M433.3,238.27H395c-7.27-51.81-41.57-96.15-91.93-114.52a133.34,133.34,0,0,0-29.29-7v-38c0-22.82-35.46-22.86-35.46,0V117c-34.91,4.65-68,22.22-90.69,50.08a141.57,141.57,0,0,0-30.44,71.24H78.7c-22.82,0-22.86,35.46,0,35.46H117a137.24,137.24,0,0,0,18.61,54.45c22.57,37.45,60.88,61.14,102.69,66.63V433.3c0,22.82,35.46,22.86,35.46,0V395.07c2.92-.35,5.85-.75,8.76-1.28,60.25-10.79,104-61.36,112.44-120.06H433.3C456.12,273.73,456.16,238.27,433.3,238.27ZM291.38,354.83a106,106,0,0,1-115.8-31.39c-62-73.5,5.19-188.93,99.84-170.61,49.75,9.63,84.51,53,85.5,103.17C360.05,299.87,333.32,340,291.38,354.83Z" /></svg>
                                </div>
                                <h4>Goals</h4>
                            </div>
                            <div className='arrowright'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>
                        <div className='goals'>
                            <div className='goal'>
                                <div className='goalsvg goalsvg2'>
                                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5H14C16.7614 5 19 7.23858 19 10V10.8382C17.9457 9.59948 16.026 9.60669 14.9818 10.8598C14.7311 11.1607 14.2689 11.1607 14.0182 10.8598C12.9679 9.59944 11.0321 9.59944 9.98178 10.8598C9.73105 11.1607 9.26895 11.1607 9.01822 10.8598C7.97395 9.60669 6.05435 9.59948 5 10.8382V10ZM21 10V10.5C21.2559 10.5 21.5118 10.5976 21.7071 10.7929C22.0976 11.1834 22.0976 11.8166 21.7071 12.2071L21.5246 12.3896C21.1544 12.7599 20.7056 12.999 20.234 13.1095C21.2565 13.4231 22 14.3747 22 15.5C22 16.3607 21.565 17.1199 20.9029 17.5696C20.9651 17.6999 21 17.8459 21 18V18.5C21 20.433 19.433 22 17.5 22H6.5C4.567 22 3 20.433 3 18.5V18C3 17.8459 3.03486 17.6999 3.09712 17.5696C2.43498 17.1199 2 16.3607 2 15.5C2 14.3747 2.74348 13.4231 3.76602 13.1095C3.29437 12.999 2.84564 12.7599 2.47537 12.3896L2.29289 12.2071C1.90237 11.8166 1.90237 11.1834 2.29289 10.7929C2.48816 10.5976 2.74408 10.5 3 10.5V10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10ZM5.35966 13H8.83259C8.32453 12.8675 7.84903 12.5809 7.48178 12.1402C7.23105 11.8393 6.76895 11.8393 6.51822 12.1402L6.46105 12.2088C6.15489 12.5762 5.77366 12.8406 5.35966 13ZM10.1674 13H13.8326C13.3245 12.8675 12.849 12.5809 12.4818 12.1402C12.2311 11.8393 11.7689 11.8393 11.5182 12.1402C11.151 12.5809 10.6755 12.8675 10.1674 13ZM15.1674 13H18.6403C18.2263 12.8406 17.8451 12.5762 17.5389 12.2088L17.4818 12.1402C17.2311 11.8393 16.7689 11.8393 16.5182 12.1402C16.151 12.5809 15.6755 12.8675 15.1674 13ZM5 18V18.5C5 19.3284 5.67157 20 6.5 20H17.5C18.3284 20 19 19.3284 19 18.5V18H5ZM4 15.5C4 15.2239 4.22386 15 4.5 15H19.5C19.7761 15 20 15.2239 20 15.5C20 15.7761 19.7761 16 19.5 16H4.5C4.22386 16 4 15.7761 4 15.5Z" fill="blue" />
                                    </svg>
                                </div>
                                <h4>Popular Dishes</h4>
                            </div>
                            <div className='arrowright'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>
                        <div className='goals'>
                            <div className='goal'>
                                <div className='goalsvg goalsvg3'>
                                    <svg width="35px" height="35px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                        <g id="SVGRepo_iconCarrier">
                                            <path d="M359.8 368.7c-83.5 37-150 103.4-187.1 186.9-5.6 12.6 0.1 27.3 12.7 32.9 3.3 1.5 6.7 2.2 10.1 2.2 9.6 0 18.7-5.5 22.8-14.8 32.1-72.2 89.5-129.6 161.7-161.6 12.6-5.6 18.3-20.3 12.7-32.9-5.5-12.6-20.3-18.3-32.9-12.7z m214.6-108.5c7.2-11.8 11.6-25.5 11.6-40.3 0-42.8-34.7-77.4-77.4-77.4-42.8 0-77.4 34.7-77.4 77.4 0 14.8 4.4 28.6 11.6 40.3-216.7 31.9-383.5 219-383.5 444.4v54.1c0 13.8 11.2 25 25 25H933c13.8 0 25-11.2 25-25v-54.1c-0.1-225.4-167-412.4-383.6-444.4zM908 733.7H109.2v-29.1c0-220.2 179.2-399.3 399.4-399.3S908 484.4 908 704.6v29.1z m24.9 100.2H84.2c-13.8 0-25 11.2-25 25s11.2 25 25 25h848.7c13.8 0 25-11.2 25-25s-11.2-25-25-25z" fill="#00ffee" />
                                        </g>
                                    </svg>
                                </div>
                                <h4>Goals</h4>
                            </div>
                            <div className='arrowright'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='comments'>
                        <h3>Customer&apos;s Feedback</h3>
                        <div className='clientfb'>
                            <div className='clientname'>
                                <h5 className="py-2 gap-2 d-flex flex-row"><Image src={cprofile} height={25} width={25} alt='profile' className='clientimage'></Image>Jenny Wilson</h5>
                            </div>
                            <div className='clientreview'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima quis fugiat explicabo officiis impedit, quod, autem vitae ullam ratione nostrum ex, aperiam quasi earum quidem facilis laudantium dolorem nisi?</p>
                        </div>
                        <hr />
                        <div className='clientfb'>
                            <div className='clientname'>
                                <h5 className="py-2 gap-2 d-flex flex-row"><Image src={cprofile} height={25} width={25} alt='profile' className='clientimage'></Image>Diane Russel</h5>
                            </div>
                            <div className='clientreview'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima quis fugiat explicabo officiis impedit, quod, autem vitae ullam ratione nostrum ex, aperiam quasi earum quidem facilis laudantium dolorem nisi?</p>
                        </div>
                        <hr />
                        <div className='clientfb'>
                            <div className='clientname'>
                                <h5 className="py-2 gap-2 d-flex flex-row"><Image src={cprofile} height={25} width={25} alt='profile' className='clientimage'></Image>Devon Lane</h5>
                            </div>
                            <div className='clientreview'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima quis fugiat explicabo officiis impedit, quod, autem vitae ullam ratione nostrum ex, aperiam quasi earum quidem facilis laudantium dolorem nisi?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
