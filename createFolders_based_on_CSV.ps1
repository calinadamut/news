
$foldernames = Get-Content \\cw01.contiwan.com\root\loc\sbas\did43630\OE_Concept\_scripts\TemplateLiterals\news_sites.csv | select -Skip 1

foreach ($item in $foldernames){

    New-Item -ItemType Directory -Path ("\\cw01.contiwan.com\root\loc\sbas\did43630\OE_Concept\_scripts\TemplateLiterals\" + $item) -Name $item.name
}