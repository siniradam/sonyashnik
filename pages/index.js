import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

import en from "../locale/en";
import ua from "../locale/ua";
import InputText from "../components/InputText";
import InputDropDown from "../components/InputDropDown";
import Link from "next/link";

export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();
  const t = locale === "ua" ? ua : en;

  const whatneedOptions = [
    { value: "cash", title: t.cash },
    { value: "accomodation", title: t.accomodation },
    { value: "legaladvise", title: t.legaladvise },
    { value: "healthcare", title: t.healthcare },
    { value: "fooditems", title: t.fooditems },
    { value: "nonefood", title: t.nonefood },
    { value: "othertype", title: t.othertype },
  ];

  const typesofaccomodationOptions = [
    { value: "ownproperty", title: t.ownproperty },
    { value: "hotelguest", title: t.hotelguest },
    { value: "rent", title: t.rent },
    { value: "tent", title: t.tent },
    { value: "shelter", title: t.shelter },
  ];

  const didyoureceivedanyOptions = [
    { value: "ngo", title: t.ngo },
    { value: "gov", title: t.gov },
    { value: "religiousinstitute", title: t.religiousinstitute },
    { value: "other", title: t.other },
  ];

  return (
    <div>
      <Head>
        <title>Support To Life - Form</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8'>
        <div className='absolute top-1 right-1 flex'>
          {locales.map((l) => (
            <Link href={`/${l}`} key={l}>
              <a className='m-2 text-gray-600 hover:text-gray-800'>{l}</a>
            </Link>
          ))}
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <Image
            className='mx-auto h-12 w-auto'
            src='/img/hayatadestek-logo-yatay-60p.svg'
            alt='Workflow'
            layout='responsive'
            width={248}
            height={60}
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Support Form
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600 max-w'>
            Please fill the from below
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
            <form className='mb-0 space-y-6' action='#' method='POST'>
              <InputText
                name='name'
                title={t.name}
                autoComplete='given-name'
                type='text'
              />
              <InputText
                name='surname'
                title={t.surname}
                autoComplete='family-name'
                type='text'
              />
              <InputText
                name='email'
                title={t.email}
                autoComplete='email'
                type='email'
              />
              <InputText
                name='telephone'
                title={t.phone}
                autoComplete='tel'
                type='tel'
              />
              <InputText
                name='dob'
                title={t.dob}
                autoComplete='date'
                type='bday'
              />
              <InputText name='nationality' title={t.nationality} type='text' />
              <InputText name='arrival' title={t.arrival} type='date' />
              <InputText
                name='address'
                title={t.address}
                type='address-line1'
              />
              <InputText name='nofamily' title={t.nofamily} type='number' />
              <InputText
                name='ageofchildren'
                title={t.ageofchildren}
                type='number'
              />
              <InputDropDown
                name='whatneed'
                title={t.whatneed}
                options={whatneedOptions}
              />
              <InputText name='other' title={t.other} type='text' />
              <InputDropDown
                name='typesofaccomodation'
                title={t.typesofaccomodation}
                options={typesofaccomodationOptions}
              />
              <InputText name='othertype' title={t.other} type='text' />
              <InputDropDown
                name='didyoureceivedany'
                title={t.didyoureceivedany}
                options={didyoureceivedanyOptions}
              />
              {/* <div className='flex items-center'>
                <input
                  id='terms-and-privacy'
                  name='terms-and-privacy'
                  type='checkbox'
                  className=''
                />
                <label
                  htmlFor='terms-and-privacy'
                  className='ml-2 block text-sm text-gray-900'
                >
                  I agree to the{" "}
                  <a href='#' className='text-orange-500 hover:text-orange-500'>
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href='#' className='text-orange-500 hover:text-orange-500'>
                    Privacy Policy
                  </a>
                  .
                </label>
              </div> */}

              <div className='flex justify-around'>
                <button
                  type='submit'
                  className='w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center'
                >
                  Submit
                </button>
                <Link href='https://call.1ve0.org/health' passHref>
                  <button
                    type='submit'
                    className='w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center'
                  >
                    {t.healthsupport}
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
