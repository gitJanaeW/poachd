import recipeImg from "../../public/images/frontendtest/chicken.jpg";
import profileImg from "../../public/images/profile-photo.jpg";
import pin from "../../public/images/pin.png";

export default function Recipe() {
    const changeLanding = () => {
        console.log(window.path);
    };
    return(
        <>
        {/* Dish details */}
        <div>
            <div className="flex pt-5 md:pt-12 justify-center">
                <div className="bg-white w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-t-lg">
                    <div className="md:w-1/2 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:rounded-bl-lg">
                        <img onClick={changeLanding} className="object-cover min-h-full max-md:rounded-lg max-sm:m-auto md:rounded-l-lg" alt="dish" src={recipeImg}/>
                    </div>
                    <div className="mb-4 pt-5 px-6 max-w-xl md:max-w-5xl md:w-1/2">
                        <h2 className="text-3xl font-medium max-sm:text-center">Butter Chicken</h2>
                        <p className="text-slate-400 max-sm:text-center mb-1">40 mins | 4 ingredents | 5 servings</p>
                        <div className="flex flex-wrap justify-start max-sm:justify-around">
                            <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Flavorful</span>
                            <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Dairy</span>
                            <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Indian</span>
                            <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Chicken</span>
                        </div>
                        <p className="mt-4 ">
                            <span><li className="text-base font-regular">1/2 cup Boiled Capsicum</li></span>
                            <span><li>Half kg boneless chicken</li></span>
                            <span><li>400gm chicken broth</li></span>
                            <span><li>half cut potatoes</li></span>
                            <span><li>Fine cut 2-3 onions and garlic</li></span>
                            <span><li>100gm Ginger garlic paste</li></span>
                            <span><li>¼ cup unsalted butter</li></span>
                            <span><li>¼ cup vegetable shortening</li></span>
                            <span><li>1 ¼ teaspoons ground cinnamon</li></span>
                            <span><li>1 cup golden raisins, optional</li></span>
                            <span><li>1 teaspoon cider or white vinegar*</li></span>
                            <span><li>½ teaspoon baking soda</li></span>
                            <span><li>1 large egg</li></span>
                            <span><li>¼ cup granulated sugar</li></span>
                            <span><li>⅛ teaspoon ground nutmeg</li></span>
                        </p>
                    </div>
                </div>
            </div> 
        </div>
        {/* Directions */}
        <div>
            <div className="py-5 flex justify-center">
                <div className="w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-lg">
                    <div className="pt-5 px-6 max-w-xl lg:max-w-5xl mb-4">
                        <h2 className="text-2xl font-medium mb-6">Directions</h2>
                        <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1">Instructions</span>
                        <ol className="mt-4 font-regular text-base">
                            <li>Prepare the vinaigrette first. Whisk together the tomato paste, red wine vinegar, basil, garlic powder, sugar, salt, and pepper in a bowl until smooth. Begin to whisk in the olive oil, one tablespooon at a time, until fully incorporated. Set the vinaigrette aside.</li>
                            <br/>
                            <li>Cook the rotini pasta according to the package directions (boil for 7-10 minutes, or until tender). Drain the pasta in a colander. Rinse briefly with cool water to cool off the pasta. Drain well.</li>
                            <br/>
                            <li>Once the pasta has drained, transfer it to a large bowl. Add the chopped broccoli, red onion, and sunflower seeds. Crumble the feta over top. Drizzle the dressing into the bowl and then gently toss the ingredients until they are evenly combined and everything is coated in dressing. Serve immediately or refrigerate until ready to eat.</li>
                        </ol>
                        <div className="mt-8 flex flex-row">
                            <p className="text-amber-300 text-3xl relative bottom-1">❤</p>
                            <span id="dish-page-num-likes" className="ml-2">0</span>
                            <br/><br/><br/>
                            <p className="text-amber-300 text-4xl relative bottom-2">♡</p>
                            <span id="dish-page-num-likes" className="ml-2">0</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        {/* Poachd Recipes */}
        <div className="shadow-lg  m-auto w-11/12 md:w-7/10 md:max-w-5xl">
            <div className="flex flex-row items-end bg-amber-300 mx-auto p-6 mt-8 rounded-t-lg">
                <img className="relative top-2 rounded-full w-14 md:w-20 h-14 md:h-20 object-cover" src={profileImg} alt='Poachd logo, which is an anstract sunny side up egg'/>
                <div className="w-6/12 md:w-10/12 ml-2">    
                <h2 className="text-slate-400 w-full">Creator</h2>
                    <h2 className="text-lg font-medium">AshusSpoon</h2>
                    <p className="text-sm font-light text-gray-600">45 Recipes</p>
                </div>
            </div>
            <div className="bg-amber-100 flex justify-between items-center px-6">
                <h2 className="text-xl md:text-2xl font-medium py-6 ">Poachd Recipes</h2>
                <p className="text-2xl">⮟</p>
            </div>
            <img className="object-cover w-1/2 max-h-80 rounded-b-lg m-auto" alt="dish" src={recipeImg}/>
            <div className="flex flex-col h-80 rounded-b-lg ">
                <div className="bg-white shadow-lg rounded-lg md:flex-row overflow-auto scrollbar-thin scrollbar-thumb-stone-300 scrollbar-track-gray-100"> 
                    <div className="mb-4 pt-5 px-6 max-w-xl md:max-w-5xl ">
                        <div className="my-4">
                            <div className="flex justify-between mt-2">
                                <h2 className=" font-medium">Butter Chicken w/ Fava</h2>
                                <img className="w-6 relative top-1 bg-amber-100 rounded-full" alt="dish" src={pin}/>
                            </div>
                            <p className="text-slate-400 mb-1">40 mins | 4 ingredents | 5 servings</p>
                            <div className="flex justify-start flex-wrap">
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Flavorful</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Dairy</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Indian</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Chicken</span>
                            </div>
                            <p className="ml-1">I've added a delicate fois gras sauce with mild hint of fava beans. F-F-F-F-F-F</p>
                        </div>
                        <hr/>
                        <div className="my-4">
                            <div className="flex justify-between mt-2">
                                <h2 className=" font-medium">Greedy Butter Chicken</h2>
                                <img className="w-6 relative top-1 bg-amber-100 rounded-full" alt="dish" src={pin}/>
                            </div>
                            <p className="text-slate-400 mb-1">40 mins | 4 ingredents | 1 servings</p>
                            <div className="flex flex-wrap justify-start">
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Flavorful</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Dairy</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Indian</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Snack</span>
                            </div>
                            <p className="ml-1">If you don't wanna share, make this single-serving version of the original recipe</p>
                        </div>
                        <hr/>
                        <div className="my-4">
                            <div className="flex justify-between mt-2">
                                <h2 className=" font-medium">Very Buttery Butter Chicken</h2>
                                <img className="w-6 relative top-1" alt="dish" src={pin}/>
                            </div>
                            <p className="text-slate-400 mb-1">40 mins | 4 ingredents | 5 servings</p>
                            <div className="inline-block flex flex-wrap justify-start">
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Flavorful</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Dairy</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Indian</span>
                                <span className="bg-amber-300 text-sm font-light rounded-md px-2 py-1 m-1">Chicken</span>
                            </div>
                            <p className="ml-1">Not your average butter chicken! This poach brings you more creamy, buttery goodness than the original recipe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Comment section */}
        <div className=" bg-amber-300">
            <div className="py-5 my-6 flex justify-center">
                <div className="w-11/12 md:w-7/10 md:mx-8 md:flex md:max-w-5xl shadow-lg rounded-lg bg-white flex flex-col">
                    <form className="w-full rounded-lg px-4 pt-2">
                        <h2 className="px-4 pt-3 pb-2 text-lg font-medium">Comments</h2>
                        <textarea className="rounded border resize-none w-full h-20 py-2 px-3 font-regular md:w-full mb-2 mt-2" name="body" placeholder='Share your thoughts . . .' required></textarea>
                        <div className="w-full md:w-full px-3">
                            <div className="text-slate-500">
                                <p className="text-xs md:text-sm w-full">🛇 You must be logged in to comment.</p>
                            </div>
                            <button className="relative float-right bg-amber-400 max-sm:float-left text-white font-medium duration-500 px-6 py-2 my-2 ml-auto hover:bg-amber-500 rounded hover:shadow-md shadow" type="button">
                                Comment
                            </button>
                        </div>
                    </form>
                    <p className="mx-auto text-center text-sm font-medium text-gray-400 bg-white">No Comments</p>
                    <div className="w-full px-4 pt-2 pb-2 my-4 rounded-b-lg bg-amber-50">
                        <div className="flex flex-row w-full p-2 my-3">
                            <img className="h-12 mr-2 object-cover rounded-full" src={profileImg} alt="idkyet"/>
                            <div className="ml-2">
                                <h2 className="text-gray-800 text-lg font-medium mb-2">BubuDudu</h2>
                                <p className="font-regular text-gray-600">Taste just like butter AND chicken!</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-row w-full p-2 my-3">
                            <img className="h-12 mr-2 object-cover rounded-full" src={profileImg} alt="idkyet"/>
                            <div className="ml-2">
                                <h2 className="text-gray-800 text-lg font-medium mb-2">BritoMan</h2>
                                <p className="font-regular text-gray-600">Moist and scrumptious</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-row w-full p-2 my-3">
                            <img className="h-12 mr-2 object-cover rounded-full" src={profileImg} alt="idkyet"/>
                            <div className="ml-2">
                                <h2 className="text-gray-800 text-lg font-medium mb-2">ILoveSalt</h2>
                                <p className="font-regular text-gray-600">I looooooove chicken! But this could use some salt</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex flex-row w-full p-2 my-3">
                            <img className="h-12 mr-2 object-cover rounded-full cursor-pointer" src={profileImg} alt="idkyet"/>
                            <div className="ml-2">
                                <h2 className="text-gray-800 text-lg font-medium mb-2 cursor-pointer">LovelyIndianFood</h2>
                                <p className="font-regular text-gray-600">Yes, finally! Butter chicken in my tummy! I love it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}