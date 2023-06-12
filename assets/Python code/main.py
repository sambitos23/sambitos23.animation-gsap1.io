import requests

# Specify the base URL where the files are located
base_url = "https://zelt.app/wp-content/themes/zelt/assets/lottie/home/overview/people/images/img_"

# Specify the range of file numbers to download
start_file_number = 0
end_file_number = 10

# Iterate over the file numbers and download each file
for file_number in range(start_file_number, end_file_number + 1):
    # Generate the URL for the current file
    file_url = base_url + str(file_number) + ".png"
    print(file_url)

    # Send a GET request to download the file
    response = requests.get(file_url)

    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        # Save the downloaded file with a suitable name
        file_name = f"img_{file_number}.png"
        with open(file_name, "wb") as file:
            file.write(response.content)
        print(f"sequence {file_name}")
    else:
        print(f"Failed to download {file_url}. Status code: {response.status_code}")

