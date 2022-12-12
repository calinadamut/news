#--------------------------------------------------------
# Source: TechCrunch 

$apiUrl = 'https://newsapi.org/v2/top-headlines?sources=usatoday'
$apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
$apiString = $apiUrl + $apiKey

$response = Invoke-restmethod -Uri $apiString

foreach ($item in $response.articles)
    {    
        $item.title + " => " + $item.description
    }


#--------------------------------------------------------
# Topic: Bitcoin 

$apiUrl = 'https://newsapi.org/v2/everything'
$q = '?q=bitcoin'
$apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
$language = '&language=en'
$sort = '&sortBy=publishedAt'
$fromDate = '&from=2022-11-27'
$apiString = $apiUrl + $apiKey

$apiString = $apiUrl + $q + $language + $sort + $fromDate + $apiKey

$response = Invoke-restmethod -Uri $apiString

foreach ($item in $response.articles)
    {
       $item.title + " => " + $item.description
    }


#--------------------------------------------------------
# Topic: Apple


$apiUrl = 'https://newsapi.org/v2/everything'
$q = '?q=bitcoin'
$fromDate = '&from=2022-11-29'
$fromDate = $null
# sort = popularity
$sort = '&sortBy=publishedAt'
$language = '?language=en'
$apiKey = '&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'

$apiString = $apiUrl + $q + $sort + $language + $fromDate + $apiKey

$response = Invoke-restmethod -Uri $apiString

foreach ($item in $response.articles)
    {
       $item.title + " => " + $item.description
    }


#--------------------------------------------------------
# Topic: Apple



$apiKey = '?&apiKey=c6186e7143cf4e73a254cd62cd0fd71b'
$apiUrl = 'https://newsapi.org/v2/top-headlines/sources'

$language = 'en'


    $apiString = $apiUrl + $language + $apiKey

$response = Invoke-restmethod -Uri $apiString
$response = Invoke-RestMethod 'https://newsapi.org/v2/top-headlines/sources?apiKey=c6186e7143cf4e73a254cd62cd0fd71b'

$1 = foreach ($item in $response.sources)
    {
       $item.title + " => " + $item.description
    }

    $1 | select -First 3 | ft