interface IStep {
    label: string
    isActive: boolean
};
  
interface IStepperProps {
    steps: IStep[]
}

export const Stepper = ({ steps }: IStepperProps) => {
    return (
       <div className="w-72">
            <ol className="flex items-center w-full text-sm font-bold text-center text-gray-400 dark:text-gray-400 sm:text-base">
                {steps.map((step: IStep, index) => (
                    <li key={`${step.label}-${index+1}`} className={`flex items-center ${index+1 !== steps.length ? "md:w-full sm:after:content-[''] after:w-20 after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700" : ""} ${step.isActive ? "after:border-green-500" : "after:border-black"} ${step.isActive ? "text-green-500 dark:text-green-500" : ""}`}>
                        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            {step.isActive && (
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>
                            )}
                            {step.label.split(" ")[0]}
                            <span className="hidden sm:inline-flex sm:ms-2">{step.label.split(" ")[1]}</span>
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    )
}