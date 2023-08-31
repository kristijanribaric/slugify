import {useEffect, useState} from "react";

export const Form = () => {
    const [slug, setSlug] = useState<string>("");
    const [issueNumber, setIssueNumber] = useState<string>("");
    const [issuePrefix, setIssuePrefix] = useState<string>("");
    const [includeIssue, setIncludeIssue] = useState<boolean>(false);
    const [result, setResult] = useState<string>("");

    const slugify = (str: string) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    };

    // on load check if there is data in local storage
    useEffect(() => {

        const data = localStorage.getItem("slugify-data");
        if (data) {
            const {issueNumber, issuePrefix, slug, includeIssue} = JSON.parse(data);
            setIssueNumber(issueNumber);
            setIssuePrefix(issuePrefix);
            setSlug(slug);
            setIncludeIssue(includeIssue);
        }
    }, []);


    useEffect(() => {
        setResult(`${(includeIssue ? "issue/" : "")}${issuePrefix ? issuePrefix + "-" : ""}${issueNumber ? issueNumber + "-" : ""}${slug ? slugify(slug) : ""}`);

    }, [issueNumber, issuePrefix, slug, includeIssue]);


    const handleClipboardClick = () => {
        navigator.clipboard.writeText(result);
    };

    const onIssueNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIssueNumber(e.target.value)
        localStorage.setItem("slugify-data", JSON.stringify({
            issueNumber: e.target.value as unknown as number,
            issuePrefix,
            slug,
            includeIssue
        }));
    }
  
    const onIssuePrefixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIssuePrefix(e.target.value);
        localStorage.setItem("slugify-data", JSON.stringify({
            issueNumber,
            issuePrefix: e.target.value,
            slug,
            includeIssue
        }));
    }

    const onSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlug(e.target.value);
        localStorage.setItem("slugify-data", JSON.stringify({
            issueNumber,
            issuePrefix,
            slug: e.target.value,
            includeIssue
        }));
    }

    const onIncludeIssueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIncludeIssue(e.target.checked);
        localStorage.setItem("slugify-data", JSON.stringify({
            issueNumber,
            issuePrefix,
            slug,
            includeIssue: e.target.checked
        }));
    }

    return (
        <div className="mx-auto my-10 w-full rounded-xl bg-emerald-800 p-8 md:w-2/3 lg:w-1/2">
            <div
                className="grid flex-initial grid-cols-2 grid-rows-2 flex-col gap-2 sm:space-x-0 sm:space-y-0 sm:flex sm:flex-row">


                <input
                    type="number"
                    value={issueNumber}
                    onChange={onIssueNumberChange}
                    className="h-10 w-full basis-28 rounded-lg px-2 placeholder:text-sm w- md:w-5/6"
                    placeholder="Issue No."
                />

                <input
                    type="text"
                    value={issuePrefix}
                    onChange={onIssuePrefixChange}
                    className="h-10 w-full basis-24 rounded-lg px-2 placeholder:text-sm md:w-5/6"
                    placeholder="Prefix"
                />

                <input
                    type="search"
                    value={slug}
                    onChange={onSlugChange}
                    className="col-span-2 row-start-2 h-10 w-full basis-full rounded-lg px-2 placeholder:text-sm md:w-5/6"
                    placeholder="Enter string to slugify here..."
                />
            </div>

            <label className="my-4 flex w-2/3 items-center gap-2 text-white sm:w-1/3">

                <input
                    className="h-4 w-4 accent-emerald-500"
                    type="checkbox"
                    checked={includeIssue}
                    onChange={onIncludeIssueChange}
                />
                Include issue prefix
            </label>


            <div className="mt-4">
                <p className="text-2xl text-white">Slugified string:</p>
                <div className="flex gap-4">
                    <p className="text-xl text-white">{result}</p>
                    {result && (
                        <button onClick={handleClipboardClick}>
                            <svg
                                className="h-5 w-5 fill-emerald-300"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 115.77 122.88"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/>
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
