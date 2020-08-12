# emoji-picker
Application for finding and copying emoji's

## Getting started
Clone the project and run `npm install` in root folder, app folder and scraper folder.

## Update emojis
Run script to update .json file with emoijs from [unicode.org](https://unicode.org/emoji/charts/full-emoji-list.html)
```
npm run update-emojis
```

## Serve dev
```
npm run dev
```
Open `localhost:3000`

## Run Electron
```
npm run start
```

## Build application file/.exe
```
npm run build
```
See `dist` folder

## Microsoft Store
Guide [electronjs.org](https://www.electronjs.org/docs/tutorial/windows-store-guide) or [github - electron-windows-store](https://github.com/felixrieseberg/electron-windows-store)

Open Microsoft Partner Center and go to app and open Product Identity for values to use

Run in Powershell as admin:
```
cd [folder]

electron-windows-store --input-directory dist\EmojisPicker-win32-x64 --output-directory microsoft-store --assets appx --package-version 1.0.0.0 --package-name EmojisPicker --package-display-name="Emojis Picker" --publisher-display-name="Gaute Meek Olsen" --publisher [Package/Identity/Publisher] --identity-name [Package/Identity/Name]
```

At the moment there is a bug with electron-windows-store:
```
    identityName: '12345MyCompany.Ghost',  // This is actually the package name!
    packageName: 'Ghost',  // This is actually the application id!!
```
