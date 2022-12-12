import landing from "../../public/images/landing.jpg";
export default function LandingImg() {
    return(
        <div className="w-full object-cover h-72 lg:w-full md:h-screen bg-cover bg-center">
            {/* source: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fbaking-or-cooking-ingredients-on-yellow-background-flat-lay-gm1161304891-318166157&psig=AOvVaw02d41Jo0dVolEOAGgM6GhX&ust=1667928966874000&source=images&cd=vfe&ved=0CA4QjhxqFwoTCOji7OPNnPsCFQAAAAAdAAAAABAI */}
            <img className="object-cover object-right w-full h-full" src={landing} alt="baking utensils and ingredients on a yellow table"/>
        </div> 
    );
}