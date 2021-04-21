def get_occurrences(text: str):
    occurr = {}
    for char in text:
        if char in occurr:
            occurr[char] += 1
        else:
            occurr[char] = 1
    return occurr


def is_valid(string: str, occurr_map: dict):
    map2 = get_occurrences(string)
    for key in occurr_map.keys():
        if key not in map2 or map2[key] < occurr_map[key]:
            return False
    return True


def min_substring(sub: str, whole_string: str):
    if sub in whole_string:
        return sub

    occurr_count = get_occurrences(sub)
    start = 0
    end = len(sub)
    result = ""
    while end <= len(whole_string) and start < end:
        tmp = whole_string[start:end]
        print(tmp, is_valid(tmp, occurr_count))
        if not is_valid(tmp, occurr_count):
            end += 1
        else:
            if len(result) == 0 or len(result) > len(tmp):
                result = tmp
            start += 1
    print(result)
    return result


min_substring("a", "bbaccc")
min_substring("a", "bbbccc")
min_substring("abc", "bbaaccc")
min_substring("aabc", "bbaccca")
min_substring("abc", "babbcccba")
min_substring("abc", "bccccca")


def test_single_char():
    assert min_substring("a", "bbaccc") == "a"


def test_empty_char():
    assert min_substring("a", "bbbccc") == ""


def test_middle_substring():
    assert min_substring("abc", "bbaaccc") == "baac"


def test_substring_two_a():
    assert min_substring("aabc", "bbaccca") == "baccca"


def test_end_substring():
    assert min_substring("abc", "babbcccba") == "cba"


def test_whole_string():
    assert min_substring("abc", "bccccca") == "bccccca"
