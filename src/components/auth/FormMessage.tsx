
export default function FormMessage({
  errorMessage,
  successMessage,
  loading
}: {
  errorMessage?:string | undefined | null;
  successMessage?:string;
  loading: boolean;
}) {
  if(!loading)
return (
  <>
  {
    errorMessage && <p className="rounded w-full border border-red-800 bg-red-100 text-red-800 text-sm px-3 py-2">{errorMessage}</p>
  }
  {
    successMessage && <p className="rounded w-full border border-green-800 bg-green-100 text-green-800 text-sm px-3 py-2">{successMessage}</p>
  }
  </>
);
}