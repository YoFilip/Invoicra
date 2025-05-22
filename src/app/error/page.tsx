import FuzzyText from "@/components/FuzzyText"

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-0">
       <FuzzyText 
  baseIntensity={0.1} 
  hoverIntensity={0.5}
  enableHover={true}
>
   404  
</FuzzyText>
  <FuzzyText 
  baseIntensity={0.1} 
  hoverIntensity={0.5}
  enableHover={true}
>
  not found asda  
</FuzzyText>
    </div>
  )
}
